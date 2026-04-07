# InfnetFood 🍔

Projeto final desenvolvido em React Native com Expo para o Instituto Infnet. O aplicativo simula um ecossistema completo de delivery, desde o login até a confirmação de pedido com integração de API.

## 🚀 Funcionalidades Principais

- **Autenticação:** Fluxo protegido por AuthContext (Login: admin / Senha: 123).
- **Home & Categorias:** Listagem dinâmica de categorias e restaurantes próximos.
- **Carrinho Real:** Gerenciamento de itens via Context API com cálculo de total.
- **Checkout Inteligente:** - Integração com API ViaCEP para preenchimento automático de endereço.
    - Validação visual de campos obrigatórios.
    - Simulação de processamento com ActivityIndicator.
- **Notificações:** Disparo de notificações locais (Expo Notifications) ao confirmar pedidos.
- **Configurações:** Troca de tema (Claro/Escuro) com estado local na tela de Perfil.

## 🛠️ Tecnologias Utilizadas

- React Native & Expo
- React Navigation (Stack)
- Context API (Autenticação e Carrinho)
- Expo Notifications
- API ViaCEP (Consumo de API Externa)

## 📦 Como Executar

1. Instale as dependências:
   ```bash
   npm install