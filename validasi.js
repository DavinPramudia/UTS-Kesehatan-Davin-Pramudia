function validasiKontak(dataform)
{
    if(dataform.nama.value=="")
    {
        alert("Data nama belum diisi");
        dataform.nama.focus();
        return(false);
    }
    if(dataform.email.value=="")
    {
        alert("Data email masih kosong");
        dataform.email.focus();
        return(false);
    }
    else{
        var email = dataform.email.value;
        var posisiAt = email.indexOf("@");
        var posisiTitik = email.lastIndexOf(".");
        if(posisiAt < 1 || (posisiTitik - posisiAt <2))
        {
            alert("Alamat email belum benar");
            dataform.email.focus();
            return(false);
        }
    }
    alert("Pesan Berhasil Dikirim");
    return(true);
}