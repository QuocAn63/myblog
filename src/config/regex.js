export const regex = {
   fullName: /[A-Z][-a-zA-Z]+/,
   email: /^[\w-.]{4,}@([\w-]+\.)+[\w-]{2,4}$/,
   userName: /^\w{6,16}$/,
   password: /^\S{6,16}$/,
   phonenumber: /(84|0[3|5|7|8|9])+(\d{8})\b/,
   date: /^(\d{1,2})[-/ ](\d{1,2})[-/ ](\d{4})$/,
};
