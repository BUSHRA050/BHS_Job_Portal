export const requestType = {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
};

export const endPoints = {
    sendCode: "sendCode",
    registerUser: "registerUser",
    loginUser: "loginUser",
    resetPassword: "resetPasswordUser",

    //User
    getUser: "getUser",
    updateUser: "updateUserProfile",
    changePasswordUser: "changePasswordUser",
    createResume: "createResume",
    updateResume: "updateResume",
    getResume: "getResumeById",
    getResumeScore: "profileCompletion",
    getResumeById: "getResume",
    sendSupportMail: "sendSupportEmail",

    //orginization
    updateOrginizationProfile: "updateOrginizationProfile",
    changePasswordOrginization: "changePasswordOrginization",
    buySubscriptionPlan: "buySubscriptionPlan",

    ///job
    createJob: "createJob",
    getJobsById: "getJobsById",
    deleteJob: "deleteJob",
    updateJob: "updateJob",
    getAllJobs: "getAllJobs",
    addFavourite: "addFavourite",
    removeFavourite: "removeFavourite",
    getFavouriteById: "getFavourite",
    applyJob: "applyJobs",
    getAppliedJobs: "getAppliedJobs",
    updateJob: "updateJob",
    getJobByType: "getJobByType",


    getAllUsers: "getAllUsers",
    getAllOrganizations: "getAllOrginization",

    //Resume
    createCoverLetter:"createCoverLetter",
    getCoverLetterById:"getCoverLetterById",
    getCoverLetter:"getCoverLetterById",
    getCoverLetterById:"getCoverLetter",
    getAllCoverLetterByCategory:"getAllCoverLetterByCategory",
    updateCoverLetter:"updateCoverLetter",
    deleteCoverLetter:"deleteCoverLetter",
};
