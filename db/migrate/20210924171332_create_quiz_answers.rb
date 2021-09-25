class CreateQuizAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :quiz_answers do |t|
      t.string :answer
      t.boolean :correct
      t.belongs_to :quiz_question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
