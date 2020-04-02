db setup:
run postgres docker instance:
docker run -d --name nimdb_postgres -e "POSTGRES_PASSWORD=password" -e "POSTGRES_USER=nimdb" -e "POSTGRES_DB=nimdb" -p 54320:5432 postgres