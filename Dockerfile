FROM nginx

# Copy the current directory contents into the container at /usr/share/nginx/html
COPY . /usr/share/nginx/html

# Make port 80 available to the world outside this container
EXPOSE 80

# Run nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
