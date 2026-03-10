export class ExternalError extends Error {
  constructor(action: string) {
    super('Falha ao tentar: ' + action);
  }
}

export class CatastrophicExternalError extends Error {
  constructor(action: string) {
    super('Erro catastrófico ao tentar: ' + action + '. Contate o suporte.');
  }
}
