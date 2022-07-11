const { getAuth } = require("firebase-admin/auth")
const admin = require("firebase-admin")

admin.initializeApp()

// get all the user data from the auth module
async function updateUserRecord(userEmail, changeTo) {
  const user = await getAuth()
    .getUserByEmail(userEmail)
    // uncomment the `then()` in order to interrupt the function and be able to save the response
    .then((userRecord) => {
      console.log(`${JSON.stringify(userRecord)}`)
      process.exit()
    })
    .catch((e) => {
      console.error(e)
    })
  // console.log("user uid", user.uid)
  // console.log("user email", user.email)
  // console.log("user provider data uid", user.providerData[0].uid)
  // console.log("user provider data email", user.providerData[0].email)
  // getAuth()
  //   .updateUser(user.uid, {
  //     email: changeTo.email,
  //     // phoneNumber: "+11234567890",
  //     // emailVerified: true,
  //     // password: "222222",
  //     // displayName: "Jane Doe",
  //     // photoURL: "http://www.example.com/12345678/photo.png",
  //     // disabled: false,
  //   })
  //   .then((userRecord) => {
  //     // See the UserRecord reference doc for the contents of userRecord.
  //     console.log("Successfully updated user", userRecord.toJSON())
  //   })
  //   .catch((error) => {
  //     console.log("Error updating user:", error)
  //   })
}
updateUserRecord("lailabooker2020@gmail.com", {
  email: "lailabooker2020@gmail.com",
})
