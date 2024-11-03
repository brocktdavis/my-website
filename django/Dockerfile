# syntax=docker/dockerfile:1

FROM python:3.13
WORKDIR /django
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

CMD ["tail", "-f", "/dev/null"]
