import groovy.json.JsonOutput

// Git settings
env.git_url = 'https://github.com/Meirino/TFG.git'
env.git_branch = 'master'

// Jenkins settings
// env.jenkins_custom_workspace = "D:/Jenkins/TFG"
env.jenkins_custom_workspace = "D:/Jenkins/TFG"
env.AWS_CredentialsId = ""
env.Github_CredentialsId = "GithubCredentials"

// AWS Region
env.region = "us-east-1"

pipeline  {
    agent {
        node {
            customWorkspace "$jenkins_custom_workspace"
            label "master"
        }
    }

    stages {
        stage('Clonar repositorio de Github') {
            steps {
                git credentialsId: "$Github_CredentialsId", url: "$git_url"
            }
        }
        stage('Realizar testing') {
            steps {
                dir('backend') {
                    bat "npm install"
                    bat "npm test"
                }
            }
        }
        stage('Compilar Angular') {
            steps {
                dir('frontend') {
                    bat "npm install"
                    bat "npm run ng -- build --prod --aot"
                }
                dir('backend') {
                    bat "mkdir public"
                    bat "move D:/Jenkins/TFG/dist/TFG-Angular/*.* public"
                }
            }
        }
    }
}