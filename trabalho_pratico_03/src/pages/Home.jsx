import { Button } from "antd";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { InputForm } from "../components/FormInput";

const FormSchema = Yup.object().shape({
  description: Yup.string().required("Descrição obrigatória"),
  pair1: Yup.string().required(
    "Por favor insira o nome dos integrantes da dupla"
  ),
  pair2: Yup.string().required(
    "Por favor insira o nome dos integrantes da dupla"
  ),
  whichPairBegins: Yup.string().required("Senha obrigatória"),
  numberOfSets: Yup.string().required("Senha obrigatória"),
  superTieBreak: Yup.string().required("Senha obrigatória"),
});

const Home = () => {
  const navigate = useNavigate();
  const submitForm = (values) => {
    console.log(values);

    navigate("/match");
  };

  return (
    <>
      <h1>Home</h1>
      <Formik
        initialValues={{
          description: "",
          pair1: "",
          pair2: "",
          whichPairBegins: "Par 1",
          numberOfSets: "Set Único",
          superTieBreak: "Não",
        }}
        onSubmit={(values) => submitForm(values)}
        validationSchema={FormSchema}
      >
        {({ handleSubmit, values }) => (
          <div
            style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
          >
            <InputForm label="Descrição" name="description" multiline={true} />
            <InputForm label="Nome da Primeira Dupla" name="pair1" />
            <InputForm label="Nome da Segunda Dupla" name="pair2" />
            <InputForm
              label="Primeiro Par a Sacar"
              name="whichPairBegins"
              type="radio"
              options={["Par 1", "Par 2"]}
            />
            <InputForm
              label="Quantidade de Sets"
              name="numberOfSets"
              type="radio"
              options={["Set Único", "Melhor de 3"]}
            />
            <InputForm
              label="Super TieBreak?"
              name="superTieBreak"
              type="radio"
              options={["Não", "Sim"]}
              disabled={values.numberOfSets === "Melhor de 3" ? false : true}
            />

            <Button type="primary" onClick={handleSubmit}>
              Iniciar
            </Button>
          </div>
        )}
      </Formik>
    </>
  );
};

export { Home };
