import { Injectable } from '@angular/core';
import { AuthService } from 'src/auth/services/auth.service';
import type { LoggedUser } from 'src/auth/services/logged-user.model';

@Injectable()
export class SupabaseAuthService extends AuthService {
  signup(email: string, password: string, name: string): Promise<void> {
    // TODO: Integrar com Supabase Authentication para criar usuário
    return Promise.reject(new Error('Supabase signup not implemented'));
  }

  login(email: string, password: string): Promise<void> {
    // TODO: Integrar com Supabase Authentication para autenticar usuário
    return Promise.reject(new Error('Supabase login not implemented'));
  }

  logout(): Promise<void> {
    // TODO: Encerrar sessão Supabase / limpar estado local
    return Promise.reject(new Error('Supabase logout not implemented'));
  }

  private mapToLoggedUser(supabaseUser: unknown): LoggedUser {
    // TODO: mapear o usuário retornado pelo Supabase para o modelo LoggedUser
    throw new Error('Method not implemented.');
  }
}
