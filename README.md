# Email Customization API

Bienvenue sur l'API d'envoi d'emails ! Cette API vous permet d'envoyer des emails en personnalisant les destinataires, les sujets, les corps des messages sous format simple ou format html.


Pour installer et exécuter cette API localement, suivez ces étapes :

1. Clonez ce dépôt :

    ```bash
    git clone https://github.com/NANYANG-BRICE/email.git
    cd email
    ```

2. Installez les dépendances :

    ```bash
    npm install ou yarn
    ```

3. Lancez l'API :

    ```bash
    node index.js
    ```

En local, l'API sera disponible sur l'adresse suivante : `http://localhost:3000`.

## Configuration

Avant de pouvoir utiliser l'API, vous devez configurer certains paramètres dans le fichier `.env`. 

  a- Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes, s'il n'existe pas et renseignez les variables d'environnement suivantes.
    
    ```bash
      EMAIL=votre_adresse eamil
      PASSWORD=le password generer depuis votre compte via app passwords de
    ```

      
  b- Sinon vous pouvez juste conserver les variables d'environnement déjà présentes




4.  ## Endpoints

    a- URL de soumission : const baseUrl = 'https://email-eta-seven.vercel.app/send-email';

    b- Method : POST avec axios ou n'importe quel client HTTP basé sur les promesses compatible avec node.js

    c- Structure de L'objet a transferer.
    
        const emailContent = {
            to: 'destinataire',
            subject: "objet_mail",
            html: `message_a_transferer`
        };

    d- Soumission de l'email.
  

        try {
                const emailContent = {
                    to: 'example@gmail.com',
                    subject: "Test Email",
                    html: `Hello ceci est un test`
                };
                const baseUrl = 'https://email-eta-seven.vercel.app/send-email';
                const emailResponse = await axios.post(baseUrl, emailContent);
                console.log('Email sent successfully:', emailResponse.data);
        } catch (error) {
            console.error('Erreur durant le test :', error);
        }


   e- Vérifier l'état d'un email : 

       - Si tout c'est bien passe cela renvera un code 200 
       - Sinon code 500

       
