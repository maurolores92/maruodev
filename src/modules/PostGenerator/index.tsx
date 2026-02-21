import React, { useState } from 'react';
import { generatePost } from '../../utils/api';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as S from './styled';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStyled } from '@components/Form';
import { Input } from '@components/Form/components/Input';
import { Button } from '@components/Button';
import { FadeIn } from '@utils/animations/FadeIn';
import { TextBox } from '@components/textBox';

type FormValues = {
  topic: string;
  tone?: string;
  length?: 'short' | 'medium' | 'long';
};

const schema = z.object({
  topic: z.string().min(3, { message: 'El tema debe tener al menos 3 caracteres.' }),
  tone: z.string().optional(),
  length: z.enum(['short', 'medium', 'long']).optional(),
});

const PostGeneratorPage: React.FC = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { topic: '', tone: '', length: 'medium' },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await generatePost(values);
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Error al generar');
    } finally {
      setLoading(false);
    }
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex justify-center">
      <Container maxWidth="md" sx={{ py: 6 }}>
        {/* HERO */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Genera Posts Profesionales con IA 🚀
          </Typography>
          <Typography variant="body1"sx={{ maxWidth: 700, mx: 'auto' }}>
            Una herramienta experimental para crear contenido optimizado para LinkedIn usando Inteligencia Artificial.
          </Typography>
        </Box>

        {/* OBJETIVO */}
        <Paper variant="outlined" sx={{ p: 3, mb: 4 }}>
          <Typography variant="h4" sx={{mb:2}}>🎯 Objetivo del Proyecto</Typography>
          <Typography variant="body1" color="text.secondary">
            Este generador fue creado como una demostración técnica de integración entre backend, APIs de Inteligencia Artificial y frontend moderno.
          </Typography>
        </Paper>

        {/* BETA NOTICE */}
        <Paper sx={{ bgcolor: 'rgba(255,243,205,0.6)', p: 2, mb: 4 }}>
          <Typography variant="h5" color="text.primary" sx={{mb:2}}>
            🚧 Versión Beta
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Cada IP puede generar hasta <strong>3 posts por día</strong>.
          </Typography>
        </Paper>

        {/* COMO FUNCIONA */}
        <Box mb={4}>
          <Typography variant="h4" align="center" gutterBottom sx={{margin: 4}}>
            ⚙️ ¿Cómo funciona?
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">1️⃣ Define el tema</Typography>
              <Typography variant="body1">Escribe sobre qué quieres que trate el post.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">2️⃣ Personaliza el tono</Typography>
              <Typography variant="body1">Elige si quieres un estilo profesional, motivador o educativo.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">3️⃣ Genera en segundos</Typography>
              <Typography variant="body1">La IA procesa tu solicitud y crea un post estructurado.</Typography>
            </Grid>
          </Grid>
        </Box>

        {/* FORM */}
        <S.AIToolsStyled>
      <S.AIToolsWrapper>
        <FadeIn>
          <S.AIToolsInnerWrapper>
            {!result ? (
              <FadeIn>
                <FormStyled onSubmit={onSubmit}>
                  <h2>
                    ¿Quieres generar un post? <b>Comencemos</b>
                  </h2>
                  <Input
                    type="text"
                    placeholder="Tema *"
                    register={form.register('topic')}
                    error={form.formState.errors.topic?.message}
                  />

                  <Input
                    type="text"
                    placeholder="Tono (ej: profesional)"
                    register={form.register('tone')}
                    error={form.formState.errors.tone?.message}
                  />

                  <div>
                    <S.Label>Extensión</S.Label>
                    <S.LengthButtons role="tablist" aria-label="Seleccionar extensión">
                      {(
                        [
                          { value: 'short', label: 'Corta' },
                          { value: 'medium', label: 'Media' },
                          { value: 'long', label: 'Larga' },
                        ] as { value: FormValues['length']; label: string }[]
                      ).map((opt) => {
                        const current = form.watch('length');
                        const isActive = current === opt.value;
                        return (
                          <S.LengthButton
                            key={opt.value}
                            type="button"
                            active={isActive}
                            onClick={() => form.setValue('length', opt.value)}
                            aria-pressed={isActive}
                          >
                            {opt.label}
                          </S.LengthButton>
                        );
                      })}
                    </S.LengthButtons>
                  </div>

                  <Button asButton={true} type="submit">
                    {loading ? 'Generando...' : 'Generar Post'}
                  </Button>
                </FormStyled>
              </FadeIn>
            ) : (
              <h3>Resultado:</h3>
            )}

            {result != null && (
              <FadeIn delay={0.1}>
                <TextBox variant="background-text" bgText="Resultado">
                  <S.ResultHeader>
                    <div>
                      <strong>{result.topic}</strong>
                      <div style={{ fontSize: 12, color: '#6b7280' }}>
                        {result.generatedAt ? new Date(result.generatedAt).toLocaleString() : ''}
                      </div>

                      {result.hashtags && result.hashtags.length > 0 && (
                        <S.Hashtags>
                          {result.hashtags.map((h: string) => (
                            <S.Hashtag key={h}>{h}</S.Hashtag>
                          ))}
                        </S.Hashtags>
                      )}
                    </div>
                    <S.CopyButton
                      type="button"
                      onClick={async () => {
                        try {
                          const hashtagsStr = result.hashtags ? result.hashtags.join(' ') : '';
                          // Copiar sólo el contenido y los hashtags (no topic ni fecha)
                          const textToCopy = `${result.content}\n\n${hashtagsStr}`;
                          await navigator.clipboard.writeText(textToCopy);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 1500);
                        } catch (e) {
                          console.error('Copy failed', e);
                        }
                      }}
                    >
                      {copied ? 'Copiado' : 'Copiar'}
                    </S.CopyButton>
                  </S.ResultHeader>

                  <div style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>{result.content}</div>
                </TextBox>
              </FadeIn>
            )}
          </S.AIToolsInnerWrapper>
        </FadeIn>
      </S.AIToolsWrapper>
    </S.AIToolsStyled>
      </Container>
    </main>
  );
};

export default PostGeneratorPage;