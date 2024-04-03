// // Create a reference to the file we want to download
// const storage = getStorage();
// const starsRef = ref(storage, 'WhatsApp Image 2023-12-09 at 20.32.55.jpeg');

let imageView = document.getElementById('get-image-from-firebase-storage');

firebase.storage().ref('WhatsApp Image 2023-12-09 at 20.32.55.jpeg').getDownloadURL().then( imgUrl => {
    imageView.src = imgUrl;
})

// // Get the download URL
// getDownloadURL(starsRef)
//   .then((url) => {
//     // Insert url into an <img> tag to "download"
//   })
//   .catch((error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     switch (error.code) {
//       case 'storage/object-not-found':
//         // File doesn't exist
//         break;
//       case 'storage/unauthorized':
//         // User doesn't have permission to access the object
//         break;
//       case 'storage/canceled':
//         // User canceled the upload
//         break;

//       // ...

//       case 'storage/unknown':
//         // Unknown error occurred, inspect the server response
//         break;
//     }
//   });