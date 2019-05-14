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
        dir(path: 'backend') {
          bat 'npm install'
          bat 'npm test'
        }

      }
    }
    stage('Compilar Angular') {
      steps {
        dir(path: 'frontend') {
          bat 'npm install'
          bat 'npm run ng -- build --prod --aot'
        }

        dir(path: 'backend') {
          bat 'mkdir public'
          bat 'move D:/Jenkins/TFG/dist/TFG-Angular/*.* public'
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