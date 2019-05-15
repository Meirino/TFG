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

pipeline {
  agent {
    node {
      customWorkspace "$jenkins_custom_workspace"
      label 'master'
    }

  }
  stages {
    stage('Clonar repositorio de Github') {
      steps {
        git(credentialsId: "$Github_CredentialsId", url: "$git_url")
      }
    }
    stage('Realizar testing') {
      steps {
        dir('backend') {
          bat 'npm install'
          bat 'npm test'
        }

      }
    }
    stage('Compilar Angular') {
      steps {
        dir('frontend') {
          bat 'npm install'
          bat 'npm run ng -- build --prod --aot --build-optimizer'
        }
        dir('backend/public') {
          bat 'dir /s /b /o:gn'
        }
      }
    }
    stage('Crear copia de MySQL') {
      steps {
        dir(path: 'C:/Program Files/MySQL/MySQL Server 8.0/bin') {
          bat 'mysqldump.exe -u root -ppassword tfg_db > tfg.sql'
        }
      }
    }
    stage('Post') {
      steps {
        cleanWs(cleanWhenFailure: true, cleanWhenSuccess: true, deleteDirs: true)
      }
    }
  }
}