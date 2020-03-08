import gql from 'graphql-tag';

const GET_ZIP_CODE = gql`
  query ZipQuery($zip: String!){
      zipQuery(zip: $zip) {
        cep,
        logradouro,
        complemento,
        bairro,
        localidade,
        uf,
        unidade,
        ibge,
        gia
      }
    }
`;

export default GET_ZIP_CODE;