FROM nginx:1.27-alpine
COPY calendar.html /usr/share/nginx/html/index.html
COPY plan.js /usr/share/nginx/html/plan.js
EXPOSE 80
