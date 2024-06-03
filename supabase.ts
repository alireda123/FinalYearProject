export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin: {
        Row: {
          id: string
        }
        Insert: {
          id: string
        }
        Update: {
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_admin_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          author_id: string
          author_name: string
          claimedSummary: string | null
          content: string
          id: number
          image: string | null
          last_updated: string | null
          ourConclusion: string | null
          published_at: string | null
          summary: string | null
          title: string
          type: string
        }
        Insert: {
          author_id: string
          author_name: string
          claimedSummary?: string | null
          content: string
          id?: never
          image?: string | null
          last_updated?: string | null
          ourConclusion?: string | null
          published_at?: string | null
          summary?: string | null
          title: string
          type: string
        }
        Update: {
          author_id?: string
          author_name?: string
          claimedSummary?: string | null
          content?: string
          id?: never
          image?: string | null
          last_updated?: string | null
          ourConclusion?: string | null
          published_at?: string | null
          summary?: string | null
          title?: string
          type?: string
        }
        Relationships: []
      }
      claims: {
        Row: {
          claim_author_email: string
          claim_author_id: string
          claim_content: string
          claim_name: string
          created_at: string
          id: number
        }
        Insert: {
          claim_author_email: string
          claim_author_id: string
          claim_content: string
          claim_name: string
          created_at?: string
          id?: number
        }
        Update: {
          claim_author_email?: string
          claim_author_id?: string
          claim_content?: string
          claim_name?: string
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_claims_claim_author_id_fkey"
            columns: ["claim_author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          article_id: number
          comment_id: number
          commenter_id: string
          commenter_name: string
          content: string
          created_at: string
          pfp: string | null
        }
        Insert: {
          article_id: number
          comment_id?: number
          commenter_id: string
          commenter_name?: string
          content: string
          created_at?: string
          pfp?: string | null
        }
        Update: {
          article_id?: number
          comment_id?: number
          commenter_id?: string
          commenter_name?: string
          content?: string
          created_at?: string
          pfp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_comments_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_comments_commenter_id_fkey"
            columns: ["commenter_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          email: string | null
          id: string
          pfp: string
          theme: string | null
          username: string | null
        }
        Insert: {
          email?: string | null
          id: string
          pfp?: string
          theme?: string | null
          username?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          pfp?: string
          theme?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_for_articles: {
        Args: {
          prefix: string
        }
        Returns: {
          author_id: string
          author_name: string
          claimedSummary: string | null
          content: string
          id: number
          image: string | null
          last_updated: string | null
          ourConclusion: string | null
          published_at: string | null
          summary: string | null
          title: string
          type: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
