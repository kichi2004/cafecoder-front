<template>
  <v-dialog :value="value" persistent>
    <v-card :loading="loading">
      <v-card-title>テストケースセットを追加</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="ok">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="params.name"
                  label="テストケースセット名"
                  required
                  :rules="[rules.required, rules.name, check]"
                  :disabled="startName === 'sample' || startName === 'all'"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="params.points"
                  type="number"
                  label="配点"
                  required
                  :rules="[rules.required, rules.points]"
                  :counter="8"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text color="red" @click="close">閉じる</v-btn>
        <v-btn text color="primary" :disabled="!ok" @click="create">保存</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue, Emit, Watch } from 'nuxt-property-decorator'

@Component
export default class EditTestcaseSetModal extends Vue {
  @Ref('form')
  form: any

  @Prop({ required: true })
  value!: boolean

  @Prop({ required: true })
  testcaseSetNames!: string[]

  @Prop()
  problemId!: number

  @Prop()
  id!: number

  loading = false
  ok = false
  startName = ''
  params = {
    name: '',
    points: '0'
  }

  rules = {
    required: (v: string) => !!v || 'このフィールドは必須です。',
    name: (v: string) => /^\w+$/.test(v) || 'テストケースセット名が無効です。',
    points: (v: string) =>
      /^\d{1,8}$/.test(v) || '配点は 0 点以上 1 億点未満にしてください。'
  }

  @Emit('close')
  close() {
    this.params = {
      name: '',
      points: '0'
    }
  }

  @Watch('value')
  async getTestcaseSet() {
    if (!this.value) return
    if (this.id == null) {
      this.startName = ''
      this.form.resetValidation()
      return
    }
    this.loading = true
    const { name, points } = await this.$api.Testcases.showTestcaseSet(
      this.problemId,
      this.id
    )
    this.startName = name
    this.params = { name, points: points.toString() }
    this.loading = false
  }

  create() {
    this.$emit('save', this.params)

    this.form.resetValidation()
    this.params = {
      name: '',
      points: '0'
    }
  }

  check(v: string) {
    return (
      this.startName === v ||
      !this.testcaseSetNames.includes(v) ||
      'この名前のテストケースセットは既に存在します。'
    )
  }
}
</script>

<style scoped lang="scss"></style>
