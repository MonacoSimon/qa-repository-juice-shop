pipeline {
    agent any

    stages {
        
        stage('Clean up previous containers') {
            steps {
                sh 'docker-compose down --remove-orphans || true'
                sh 'docker rm -f juice-shop || true'
            }
        }

        stage('Levantar Juice Shop') {
            steps {
                sh 'docker-compose up -d juice-shop'
            }
        }

        stage('Ejecutar pruebas') {
            parallel {

                stage('Cypress') {
                    steps {
                        sh 'docker-compose up cypress-tests'
                    }
                }

                stage('API') {
                    steps {
                        sh 'docker-compose up api-tests'
                    }
                }

                stage('JMeter') {
                    steps {
                        sh 'docker-compose up jmeter-tests'
                    }
                }

                stage('ZAP') {
                    steps {
                        sh 'docker-compose up zap-tests'
                    }
                }
            }
        }
    }

    post {
        always {
            sh 'docker-compose down --remove-orphans'
        }

        success {
            archiveArtifacts artifacts: 'results-docker/**/*', allowEmptyArchive: true
            junit 'results-docker/**/*.xml'
        }
    }
}