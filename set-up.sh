#!/bin/bash

echo "Verificando Docker"

if ! command -v docker &> /dev/null
then
    echo "Docker no está instalado"
    exit 1
fi

echo "Docker encontrado"

if ! docker compose version &> /dev/null
then
    echo "Docker Compose no encontrado"
    exit 1
fi

echo "Docker Compose encontrado"

if ! docker info &> /dev/null
then
    echo "Docker daemon no está corriendo"
    exit 1
fi

echo "Docker daemon activo"

echo "Entorno listo"
