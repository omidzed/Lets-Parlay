#!/bin/sh

# Do nothing if no database has been configured yet.
/opt/elasticbeanstalk/bin/get-config environment -k RDS_DB_NAME || exit 0

# Install psql
dnf -y install postgresql15

# Uncomment the next line if you do _not_ want the database to be deleted and replaced
# on every deploy. Remember to comment it if you _do_ want the database updated.
# exit 0

# Create a connection URL of form `postgresql://user:pwd@hostspec/dbname`
DB_HOSTNAME=`/opt/elasticbeanstalk/bin/get-config environment -k RDS_HOSTNAME`
DB_PORT=`/opt/elasticbeanstalk/bin/get-config environment -k RDS_PORT`
DB_USER=`/opt/elasticbeanstalk/bin/get-config environment -k RDS_USERNAME`
DB_PASSWORD=`/opt/elasticbeanstalk/bin/get-config environment -k RDS_PASSWORD`
DB_NAME=`/opt/elasticbeanstalk/bin/get-config environment -k RDS_DB_NAME`

DATABASE_URL=postgresql://$DB_USER:$DB_PASSWORD@$DB_HOSTNAME:$DB_PORT/$DB_NAME

# Update the database
psql "$DATABASE_URL" \
  -f database/schema.sql \
  -f database/data.sql
