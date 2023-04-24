module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'revert'
      ]
    ]
  },
  prompt: {
    questions: {
      type: {
        description: '选择当前 commit 的类型',
        enum: {
          feat: {
            description: '新功能',
            title: '✨Features',
            emoji: '✨'
          },
          fix: {
            description: '修复bug',
            title: '🐛Bug Fixes',
            emoji: '🐛'
          },
          docs: {
            description: '文档更新',
            title: '📚Documentation',
            emoji: '📚'
          },
          style: {
            description: '代码风格的更改(空格，逗号，缺少分号等)',
            title: '💎Styles',
            emoji: '💎'
          },
          refactor: {
            description: '代码重构(即不修复bug也不增加新功能)',
            title: '📦Code Refactoring',
            emoji: '📦'
          },
          perf: {
            description: '性能提升',
            title: '🚀Performance Improvements',
            emoji: '🚀'
          },
          test: {
            description: '添加测试文件或者更改测试文件',
            title: '🚨Tests',
            emoji: '🚨'
          },
          build: {
            description:
              '构建系统的更改或新的依赖更新，如webpack、gulp更改或者npm',
            title: '🛠Builds',
            emoji: '🛠'
          },
          ci: {
            description: 'ci配置的更改，如 travis、gitlab-ci',
            title: '⚙️Continuous Integrations',
            emoji: '⚙️'
          },
          revert: {
            description: '恢复以前的提交（如git revert）',
            title: '🗑Reverts',
            emoji: '🗑'
          }
        }
      },
      scope: {
        description: '变动访问，模块或者文件名(可skip)'
      },
      subject: {
        description: '写一个简短的描述'
      },
      body: {
        description: '提供更改的详细说明(可skip)'
      },
      isBreaking: {
        description: '是否有破坏性更新'
      },
      breakingBody: {
        description: '破坏性变更的详细描述'
      },
      breaking: {
        description: '破坏性变更的详细描述简短描述'
      }
    }
  }
};
