#!/bin/sh

if [ -d "build" ]; then
  rm -rf build
fi

# install, skip packaging
cmake -B build -S . -DINSTALL_SCRIPT=ON -DCMAKE_INSTALL_PREFIX=~/.local

cmake --build build
cmake --install build
