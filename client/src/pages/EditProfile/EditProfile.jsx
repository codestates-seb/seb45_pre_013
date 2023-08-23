import { useEffect } from "react";
import { useNavigate } from "react-router";
import useInput from "@/hooks/useInput";
import {
  EditProfileContainer,
  FormContainer,
  EditFormContainer,
  ProfileTitle,
  BtnContainer,
  SaveBtn,
  CancelBtn,
} from "@/styles/EditProfile/EditProfilePageStyle";
import EditProfileNav from "@/components/EditProfile/EditProfileNav";
import LinksForm from "@/components/EditProfile/LinksForm";
import PrivateInfoForm from "@/components/EditProfile/PrivateInfoForm";
import PublicInformation from "@/components/EditProfile/PublicInformation";
import { API_URL } from "@/config/config";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const Authorization = localStorage.getItem("Authorization");
  const nickname = useInput("");
  const location = useInput("");
  const title = useInput("");
  const intro = useInput("");

  useEffect(() => {
    if (!Authorization) {
      navigate("/Login/");
    } else {
      fetch(`${API_URL}/members`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          nickname.onChange(data.nickname);
          location.onChange(data.location);
          title.onChange(data.title);
          intro.onChange(data.Intro);
        });
    }
  }, []);

  const onClickCancelHandler = () => {
    navigate("/MyPage");
  };
  const onClickSaveProfileHandler = () => {
    fetch(`${API_URL}/members`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: Authorization,
      },
      body: JSON.stringify({
        nickname: nickname.value,
        location: location.value,
        title: title.value,
        intro: intro.value,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate("/MyPage");
      })
      .catch();
  };

  return (
    <>
      <EditProfileContainer>
        <EditProfileNav></EditProfileNav>
        <FormContainer>
          <ProfileTitle>
            <h1>Edit your profile</h1>
          </ProfileTitle>
          <EditFormContainer>
            <PublicInformation
              nickname={nickname}
              location={location}
              title={title}
              intro={intro}
            ></PublicInformation>
            <LinksForm></LinksForm>
            <PrivateInfoForm></PrivateInfoForm>
            <BtnContainer>
              <SaveBtn onClick={onClickSaveProfileHandler}>
                Save profile
              </SaveBtn>
              <CancelBtn onClick={onClickCancelHandler}>Cancel</CancelBtn>
            </BtnContainer>
          </EditFormContainer>
        </FormContainer>
      </EditProfileContainer>
    </>
  );
};

export default EditProfilePage;
