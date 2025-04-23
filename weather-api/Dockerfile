FROM php:8.2-apache

RUN a2enmod rewrite

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    git unzip libzip-dev zip && \
    docker-php-ext-install zip pdo pdo_mysql

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY . .

RUN composer install --no-dev --optimize-autoloader

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

COPY ./docker/apache.conf /etc/apache2/sites-available/000-default.conf

ENV PORT=8080
EXPOSE 8080
