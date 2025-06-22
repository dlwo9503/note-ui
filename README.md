# note-ui

간단한 상태 관리 예제로 구성된 React + TypeScript 프로젝트입니다.

## 📦 기술 스택

- Node.js 16
- React 18
- TypeScript
- Zustand (상태 관리)
- CRA (Create React App)

## 📁 프로젝트 구조
note-ui/
├── public/
├── src/
│   ├── store/           # Zustand 상태 관리
│   │   └── useCounter.ts
│   ├── App.tsx
│   ├── index.tsx
├── .gitignore
├── .nvmrc
├── package.json
├── tsconfig.json
└── README.md

## ▶️ 실행 방법

### 1. Node.js 16 사용 (nvm)
nvm install 16
nvm use 16

### 2. 의존성 설치
npm install

### 3. 개발 서버 실행
npm start