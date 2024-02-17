#!/bin/bash

path="./images"
minSize=0
jpg=false
png=false
gif=false
verbose=false
report=false

function Get-Size {
    pth=$1
    echo "$(du -sh $pth | cut -f1) kb"
}

function Compress-Images {
    type=$1
    params=""
    case $type in
        jpg) params="-compress jpeg -quality 35" ;;
        gif) params="-fuzz 10% -layers Optimize" ;;
        png) params="-depth 24 -define png:compression-filter=2 -define png:compression-level=9 -define png:compression-strategy=1" ;;
    esac

    if [ "$report" = true ]; then
        echo ""
        echo "Listing $type files that would be included for compression with params: $params"
    else
        echo ""
        echo "Compressing $type files with parameters: $params"
    fi

    find $path -type f -name "*.$type" | while read -r file; do
        if [ "$(du -k "$file" | cut -f1)" -gt $minSize ]; then
            if [ "$report" = true ]; then
                fSize=$(du -sh "$file" | cut -f1)
                echo "$file - $fSize"
            else
                if [ "$verbose" = true ]; then
                    echo "Compressing $file"
                    fileStartSize=$(du -sh "$file" | cut -f1)
                fi

                # compress image
                if [ "$report" = false ]; then
                    magick "$file" $params "$file"
                fi

                if [ "$verbose" = true ]; then
                    fileEndSize=$(du -sh "$file" | cut -f1)
                    echo "Reduced from $fileStartSize to $fileEndSize"
                fi
            fi
        fi
    done
}

# begin compression process
startSize=$(Get-Size "$path")
echo "Compressing images greater than $minSize kb in $path"
echo "---"

# determine whether to compress specific image types or all
compressAll=false
if ! $jpg && ! $png && ! $gif; then
    compressAll=true
fi

# compress, or skip, each image type as directed
if $jpg || $compressAll; then
    Compress-Images "jpg"
fi
if $gif || $compressAll; then
    Compress-Images "gif"
fi
if $png || $compressAll; then
    Compress-Images "png"
fi

# echo completion and stats
endSize=$(Get-Size "$path")
echo ""
echo "DONE"
echo "Starting sizes: $startSize"
echo "Ending sizes: $endSize"

