# Tracking GA4 / GTM

O site já empurra eventos para `window.dataLayer`. Para ativar o Google Analytics:

1. Crie o container no Google Tag Manager e cole o ID (`GTM-XXXXXXX`) em `site/src/data/site.ts` → `gtmId`.
2. No GTM, crie a tag **GA4 Configuration** e uma tag **GA4 Event** com o nome `{{Event}}`, disparada por um acionador de *evento personalizado* com regex `.*` (ou só os eventos abaixo).
3. Marque como **conversão** no GA4: `whatsapp_lead` e `generate_lead`.

## Eventos

| Evento | Quando dispara |
|---|---|
| `whatsapp_click_{posição}` | Qualquer clique que abre o WhatsApp. Posições: `header`, `hero`, `processo`, `cronograma`, `cta_final`, `barra_fixa_whatsapp`, `telefone_rodape`, `telefone_utilitybar`, `telefone_contato`, `contato_card`, `obrigado`, `404`, `cta_nao_achou_cidade` |
| `cta_click_{posição}` | "Pedir orçamento" e links do rodapé (`google_rodape`) |
| `whatsapp_form_start` | Primeira digitação no formulário |
| `whatsapp_form_submit` / `whatsapp_lead` / `generate_lead` | Envio do formulário (abre o WhatsApp e leva para `/obrigado`) |
| `whatsapp_lead_obrigado_view` | Carregamento de `/obrigado` |
| `mapa_open` | Clique em "Ver mapa interativo" |
| `scroll_depth_{25,50,75,90}` | Rolagem da página |

Todo evento leva `event_name`, `event_channel`, `page_path`, `page_localidade`, `page_servico`. **Nenhum dado pessoal** (nome, telefone) vai para o GA4.
