- Fomos no Painel da AWS selecionamos o serviço AWS LAMBDA;
- Adicionamos uma trigger (API Gateway)
- Criamos um evento de teste clicando no botao teste e selecionamos o template de API Gateway;
- Em resources, no nosso API Gateway, ACTIONS, Deploy API
- Pega a url base + default/o nome de sua função e joga no navegador


###Trabalhando com o Serveless Framework
    - Instalar o serverless > sudo npm i -g serverless
    - Para criar um projeto com seu template
    
    'serverless create --template aws-nodejs --path nomeDaPasta'
    
    'serverless create --template aws-nodejs --path heroes'
    
    - Alteramos o arquivo servelesss adicionando o array de events 
    - Alteramos e adicionamos a rota http /heroes

    - Por boa prática, geramos o template do nosso serviço, em seguida,
    fazemos deploy para verificar se as credenciais estão corretas. 
  
    'serverless config credentials --provider aws ' 

    --key $AWS_KEY \
    --secret $AWS_SECRET
    
    para configurar credenciais da AWS/AZURE/GCLOUD

    - Para fazer deploy de nossas funções existem duas formas
    1. 'serverless deploy' deploy de TODAS as funções
    2. 'serveless deploy -f heroes-create' deploy de uma função

    Quando estamos trabalhando na mesma conta, é importante nao fazer deploy da mesma função ao mesmo tempo...
    Para caso de estudos mudamos o stage p/ cada aluno.

   c