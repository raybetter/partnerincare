from node:22-bookworm-slim

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y \ 
        git
        # curl \
        # ffmpeg \
        # python \
        # pip

# RUN pip3 install --upgrade --force-reinstall "git+https://github.com/ytdl-org/youtube-dl.git"


