pipeline { 

    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Source checkout') {
            steps {
                echo 'Cloning source code is finished.'
            }
        }

        stage('Test') {
            steps {
                echo 'Cloning source test is finished.'
            }
        }

        stage('Docker build') {
            steps {
                echo 'Build dokcer image'
                bat ''' docker image build -t cbfsd-admin-webapp-12-11-2022 .'''
            }
        }

        stage('Docker deploy') {
            steps {
                echo '----------------- This is a docker deploment phase ----------'
                bat '''
                
                docker container run --restart always --name cbfsd-admin-webapp-container-12-11-2022 -p 4200:80 -d cbfsd-admin-webapp-12-11-2022
            '''
            }
        }
    }
}