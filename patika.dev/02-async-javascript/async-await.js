// Öncelikle durumu promise nesneleri ile simüle edelim.

function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('Veriler aliniyor...');
        if (data) {
            resolve('Veriler alindi.')
        }
        else {
            reject('Veriler alinimadi!')
        }
    })
}

function receivedData(data) {
    return new Promise((resolve, reject) => {
        console.log('Veriler duzenleniyor...');
        if (data) {
            resolve('Veriler duzenlendi.')
        }
        else {
            reject('Veriler duzenlenemedi!')
        }
    })
}

/*
  getData(true)
    .then((result) => {
        console.log(result);
        return receivedData(true);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
 */

// *** Eğer line 30'da return ifadesi olmasaydı problemi:
// then geri çağrısının içine receivedData(true) öğesinden önce return deyimini eklediğinizde, receivedData(true) tarafından döndürülen vaadin then geri çağrısının kendisinden döndürülmesini sağlar. Bu, JavaScript'te zincirleme vaatler için önemlidir.

// JavaScript'te, bir then geri aramasından bir promise döndürdüğünüzde, zincirdeki bir sonraki then kendi mantığını yürütmeden önce bu promise'in yerleşmesini (çözümlenmesini veya reddedilmesini) bekler.

// Return ifadesi içermeyen orijinal kodunuzda, then geri çağrısının içindeki receivedData(true) çağrısı yürütülür, ancak vaadi açıkça döndürülmez. Bu nedenle, zincirdeki bir sonraki then, mantığını yürütmeden önce receivedData(true)'nun tamamlanmasını beklemez.

// return deyimini ekleyerek, receivedData(true) tarafından oluşturulan vaadi açıkça döndürürsünüz ve sonraki işlemin yürütülmeden önce tamamlanmasını beklemesini sağlarsınız.

// ** Bonus: HATALAR YAKALANMAZSA UNHANDLED ... HATASI ALINIR. BİRAZDAN ASYNC-AWAIT UZERINDE BUNU GORECEGIZ...

// Şimdi bu durumu async-await ile işleme koyalım.

async function processData() {
    try {
        const fetchData = await getData(true);
        console.log(fetchData);
        const setData = await receivedData(true);
        console.log(setData);
    }
    catch(err) {
        console.log(err);
    }
}

processData();

