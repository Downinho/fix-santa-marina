# Configuração do Vídeo Hero

## Como adicionar seu vídeo hero personalizado

1. **Faça upload do seu vídeo** para a pasta `public/videos/` com o nome `marbana-hero.mp4`

2. **Formatos recomendados:**
   - Formato: MP4 (H.264)
   - Resolução: 1920x1080 (Full HD) ou superior
   - Duração: 10-30 segundos (para melhor performance)
   - Taxa de bits: 2-5 Mbps
   - Sem áudio (será mutado automaticamente)

3. **Estrutura de pastas:**
```
public/
├── videos/
│   ├── marbana-hero.mp4  ← Seu vídeo hero personalizado
│   ├── jetski.mp4
│   ├── iate.mp4
│   └── ...outros vídeos
```

4. **Fallback automático:**
   - Se o vídeo não carregar, será exibida automaticamente a imagem hero
   - Se o arquivo não existir, será usado o vídeo padrão do sistema

## Otimizações implementadas

### Responsividade melhorada:
- ✅ Reduzido gap entre imagens e conteúdo
- ✅ Melhor adaptação mobile/desktop
- ✅ Prevenção de overflow lateral
- ✅ Containers com largura máxima controlada

### Vídeo Hero:
- ✅ Suporte a vídeo MP4 personalizado
- ✅ Fallback inteligente para imagem
- ✅ Otimizações de carregamento
- ✅ Preload para performance