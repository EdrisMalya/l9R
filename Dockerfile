FROM php:7.4-apache

# Install required PHP extensions
RUN apt-get update && apt-get install -y \
    unixodbc \
    unixodbc-dev \
    freetds-dev \
    freetds-bin \
    tdsodbc \
    libssl-dev \
 && curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash \
 && apt-get install -y php7.4-sqlsrv \
 && docker-php-ext-enable sqlsrv pdo_sqlsrv

# Copy the application code
COPY . /var/www/html

# Set the working directory to the application root
WORKDIR /var/www/html

# Install composer dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
 && composer install

# Set permissions on storage and bootstrap/cache directories
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port 80 and start the Apache web server
EXPOSE 9001
CMD ["apache2-foreground"]
