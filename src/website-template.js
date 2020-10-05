const engineerListHandler = engineerList => {
    if (!engineerList) {
        return '';
    }
    engineerListHTML = [];
    for (let i = 0; i < engineerList.length; i++) {
        let transformedValues = `            
        <div class="col-4">
        <div class="card">
            <div class="card-header bg-primary">
                <h2 class="text-center text-white">${engineerList[i].getName()}</h2>
                <h3 class="text-center text-white">${engineerList[i].getRole()}</h3>
            </div>
            <div class="card-body">
                <h5 class="card-title">Employee Information:</h5>
                <p class="card-text">${engineerList[i].getId()}</p>
                <p class="card-text">${engineerList[i].getEmail()}</p>
                <p class="card-text">${engineerList[i].getGithub()}</p>
            </div>
        </div>
    </div>`;
        engineerListHTML.push(transformedValues);
    }
    return engineerListHTML.join('');
}

const internListHandler = internList => {
    if (!internList) {
        return '';
    }
    internListHTML = [];
    for (let i = 0; i < internList.length; i++) {
        let transformedValues = `            
        <div class="col-4">
        <div class="card">
            <div class="card-header bg-primary">
                <h2 class="text-center text-white">${internList[i].getName()}</h2>
                <h3 class="text-center text-white">${internList[i].getRole()}</h3>
            </div>
            <div class="card-body">
                <h5 class="card-title">Employee Information:</h5>
                <p class="card-text">${internList[i].getId()}</p>
                <p class="card-text">${internList[i].getEmail()}</p>
                <p class="card-text">${internList[i].getSchool()}</p>
            </div>
        </div>
    </div>`;
        internListHTML.push(transformedValues);
    }
    return internListHTML.join('');
}

module.exports = (manager, engineerList, internList) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <title>Team Website</title>
</head>

<body>

    <header class="bg-info">
        <h1 class="text-white text-center pt-5 pb-5">My Team</h1>
    </header>

    <main class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-primary">
                        <h2 class="text-center text-white">${manager.getName()}</h2>
                        <h3 class="text-center text-white">${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Employee Information:</h5>
                        <p class="card-text">${manager.getId()}</p>
                        <p class="card-text">${manager.getEmail()}</p>
                        <p class="card-text">${manager.getOffice()}</p>
                    </div>
                </div>
            </div>
        ${engineerListHandler(engineerList)}
        ${internListHandler(internList)}
        </div>
    </main>
</body>

</html>
    `;
}