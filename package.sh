#!/bin/sh

if [ -d "build" ]; then
  rm -rf build
fi

# package, skip installing
cmake -B build -S . -DPACKAGE_SCRIPT=ON
cmake --build build
