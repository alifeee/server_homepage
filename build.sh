#!/bin/bash
# "build" site
mustache projects.yaml projects.mo > projects.html
mustache projects.yaml index.mustache > index.html
