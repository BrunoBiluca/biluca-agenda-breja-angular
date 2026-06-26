import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { AuthService } from 'src/auth/services/auth.service';
import { LoggedUser } from 'src/auth/services/logged-user.model';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class SupabaseAuthService extends AuthService {
  private database: ReturnType<typeof createClient>;

  constructor() {
    super();
    this.database = createClient(environment.supabaseUrl, environment.supabaseApiKey);
  }

  async signup(email: string, password: string, name: string): Promise<void> {
    try {
      const { error } = await this.database.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: name,
          },
        },
      });
      if (error) throw error;
    } catch (error: unknown) {
      throw error;
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const { data, error } = await this.database.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;

      this.setLoggedUser(
        new LoggedUser(data.user.user_metadata['display_name'], email, data.user!.id),
      );
    } catch (error: unknown) {
      throw error;
    }
  }

  logout(): Promise<any> {
    localStorage.removeItem('loggedUser');
    return this.database.auth.signOut();
  }
}
