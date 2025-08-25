# 📋 INSTRUÇÕES DE DEPLOY MANUAL VIA FTP

## 🎯 **ESTRUTURA DE PASTAS NO SERVIDOR**

```
public_html/
├── index.html                    # Página principal (do build React)
├── assets/                       # CSS/JS gerados pelo build
│   ├── index-xxxxx.css
│   └── index-xxxxx.js  
├── .htaccess                     # Redirecionamento React Router
├── robots.txt                    # SEO
├── sitemap.xml                   # SEO
└── api/                          # Backend PHP
    ├── index.php                 # Router principal
    ├── debug.php                 # Teste de conectividade
    ├── .htaccess                 # Configurações API
    ├── config/
    │   └── database.php
    ├── utils/
    │   ├── jwt.php
    │   └── response.php
    ├── auth/
    │   ├── login.php
    │   ├── me.php
    │   └── logout.php
    ├── vessels/
    │   └── index.php
    ├── sailors/
    │   └── index.php
    ├── blog/
    │   ├── posts.php
    │   └── categories.php
    ├── dashboard/
    │   └── stats.php
    └── upload/
        └── index.php
```

## 🚀 **PASSOS PARA DEPLOY**

### 1. **BUILD DO PROJETO**
```bash
npm run build
```

### 2. **UPLOAD VIA FILEZILLA**

#### **Frontend (React):**
- Upload todo conteúdo da pasta `dist/` para `public_html/`
- Upload o arquivo `public/.htaccess` para `public_html/.htaccess`
- Upload `public/robots.txt` e `public/sitemap.xml`

#### **Backend (PHP):**
- Upload toda a pasta `backend/api/` para `public_html/api/`

### 3. **CONFIGURAÇÃO DO BANCO**
- Execute o script `database/create_admin_user.sql` no phpMyAdmin
- Verifique as credenciais no arquivo `backend/api/config/database.php`

### 4. **TESTES**

#### **Teste da API:**
Acesse: `https://seudominio.com.br/api/debug.php`
Deve retornar:
```json
{
  "success": true,
  "data": {
    "status": "API Online",
    "database": "Connected"
  }
}
```

#### **Teste do Login:**
Acesse: `https://seudominio.com.br/portal-gui`
Login:
- **Email:** guilhermewariesp@gmail.com
- **Senha:** judeu1234

## 🔧 **TROUBLESHOOTING**

### **Erro 404 nas rotas:**
- Verificar se `.htaccess` está na pasta root
- Verificar se mod_rewrite está habilitado no servidor

### **Erro de conexão com banco:**
- Verificar credenciais em `config/database.php`
- Verificar se o MySQL está acessível externamente

### **Erro de login:**
- Verificar logs no console do navegador (F12)
- Testar endpoint: `https://seudominio.com.br/api/debug.php`
- Verificar se o usuário foi criado no banco

### **Erro de CORS:**
- Verificar se `.htaccess` da API está configurado
- Verificar headers no `index.php` da API

## 📞 **COMANDOS DE DEBUG**

```bash
# Ver logs em tempo real (se tiver acesso SSH)
tail -f /var/log/apache2/error.log

# Testar conexão com banco via PHP
php -r "new PDO('mysql:host=marbanabd.mysql.dbaas.com.br;dbname=marbanabd', 'marbanabd', 'Marbana@123#');"
```

## ✅ **CHECKLIST FINAL**

- [ ] Build do React funcionando
- [ ] Arquivos .htaccess no lugar certo
- [ ] API respondendo no /debug.php
- [ ] Banco de dados conectando
- [ ] Usuário admin criado
- [ ] Login funcionando no /portal-gui
- [ ] Rotas do React funcionando (teste navegar para /embarcacoes)