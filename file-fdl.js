Notification.requestPermission()
.then((permission) => {
 if (permission === 'granted') {
    // Kullanıcı izin verdi, bildirim gönderebilirsiniz
 } else {
    // Kullanıcı izin vermedi, bu yüzden bildirim gönderemezsiniz
 }
});