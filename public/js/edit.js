const deleteFoodItem = async (id) => {
  await fetch(`/api/Managelogin/${id}`, {
    method: "DELETE",
  });
  document.location.reload();
};

$(".card-body").on("click", ".removeItem", (e) => {
  const id = $(e.target).data("id");

  deleteFoodItem(id);
});
