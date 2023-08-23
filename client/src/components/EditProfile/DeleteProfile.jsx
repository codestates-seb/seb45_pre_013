import { useState } from "react";
import {
  DeleteTitle,
  DeleteContainer,
  DeleteTxtContainer,
  AgreeFormContainer,
  CheckboxContainer,
  DeleteBtn,
} from "@/styles/DeleteProfileStyle";

const DeleteProfileForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <DeleteTitle></DeleteTitle>
      <DeleteContainer>
        <DeleteTxtContainer>
          <p>
            Before confirming that you would like your profile deleted, we{"'"}d
            like to take a moment to explain the implications of deletion:{" "}
          </p>
          <ul>
            <li>
              Deletion is irreversible, and you will have no way to regain any
              of your original content, should this deletion be carried out and
              you change your mind later on.
            </li>
            <li>
              Your questions and answers will remain on the site, but will be
              disassociated and anonymized (the author will be listed as{" "}
              {/* {username}  */}
              )and will not indicate your authorship even if you later return to
              the site.
            </li>
          </ul>
          <p>
            Confirming deletion will only delete your profile on Stack Overflow
            - it will not affect any of your other profiles on the Stack
            Exchange network. If you want to delete multiple profiles, you{"'"}
            ll need to visit each site separately and request deletion of those
            individual profiles.{" "}
          </p>
          <AgreeFormContainer>
            <label htmlFor="delete-terms">
              <CheckboxContainer>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="delete-terms"
                  id="delete-terms"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                ></input>
                <p>
                  I have read the information stated above and understand the
                  implications of having my profile deleted. I wish to proceed
                  with the deletion of my profile.
                </p>
              </CheckboxContainer>
            </label>
          </AgreeFormContainer>
        </DeleteTxtContainer>
        <DeleteBtn disabled={!isChecked}>Delete profile</DeleteBtn>
      </DeleteContainer>
    </>
  );
};

export default DeleteProfileForm;
