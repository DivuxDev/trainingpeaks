FROM nginx:1.27-alpine
COPY calendar.html /usr/share/nginx/html/index.html
COPY plan.js /usr/share/nginx/html/plan.js
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
