#!/bin/bash
# "build" site
mustache projects.yaml projects.mustache > projects.html
mustache projects.yaml index.mustache > index.html
