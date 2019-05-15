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
          bat 'npm run ng -- build --prod --aot'
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