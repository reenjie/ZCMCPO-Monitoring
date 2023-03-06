import React from "react";
import swal from "sweetalert";
export const notify = ({ type, title, message }) => {
  return swal(title, message, type);
};

export const question = ({
  title,
  message,
  message1,
  type,
  btndanger,
  action,
}) => {
  return swal({
    title: title,
    text: message,
    icon: type,
    buttons: true,
    dangerMode: btndanger,
  }).then((willDelete) => {
    if (willDelete) {
      action();
    }
  });
};
