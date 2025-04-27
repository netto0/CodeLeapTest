export default function handleCancel(
  setActiveModal: any,
  setSelectedPost: any
) {
  setActiveModal(false);
  setSelectedPost({
    id: 0,
    username: "",
    created_datetime: "",
    title: "",
    content: "",
    author_ip: "",
  });
}
