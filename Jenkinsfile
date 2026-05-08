pipeline {
    agent any
    
    environment {
        DOCKER_COMPOSE = "docker-compose"
    }
    
    stages {
        stage('Setup') {
            steps {
                sh '''
                    # Limpiar contenedores anteriores
                    docker compose down --remove-orphans || true
                    docker compose rm -f || true
                '''
            }
        }
        
        stage('Ejecutar Pruebas') {
            parallel {
                stage('Cypress Tests') {
                    steps {
                        sh 'docker compose up cypress-tests --abort-on-container-exit'
                    }
                }
                stage('API Tests') {
                    steps {
                        sh 'docker compose up api-tests --abort-on-container-exit'
                    }
                }
                stage('JMeter Tests') {
                    steps {
                        sh 'docker compose up jmeter-tests --abort-on-container-exit'
                    }
                }
                stage('ZAP Tests') {
                    steps {
                        sh 'docker compose up zap-tests --abort-on-container-exit'
                    }
                }
            }
        }
    }
    
    post {
        always {
            sh '''
                docker compose down --remove-orphans
                docker compose rm -f
            '''
        }
        success {
            archiveArtifacts artifacts: 'results-docker/**/*', allowEmptyArchive: true
            
            // Publicar resultados JUnit
            junit 'results-docker/**/*.xml'
            
            // TODO: Instalar HTML Publisher plugin y descomentar esto
            // publishHTML([
            //     allowMissing: true,
            //     alwaysLinkToLastBuild: false,
            //     keepAll: false,
            //     reportDir: 'results-docker/newman',
            //     reportFiles: 'report.html',
            //     reportName: 'API Test Results'
            // ])
        }
    }
}